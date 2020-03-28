<?php

/*
 * This file is part of Cachet.
 *
 * (c) Alt Three Services Limited
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace CachetHQ\Cachet\Foundation\Exceptions\Displayers;

use AltThree\Validator\ValidationException;
use GrahamCampbell\Exceptions\Displayer\AbstractJsonDisplayer;
use GrahamCampbell\Exceptions\Displayer\DisplayerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class JsonValidationDisplayer extends AbstractJsonDisplayer implements DisplayerInterface
{
    /**
     * Get the supported content type.
     *
     * @return string
     */
    public function contentType()
    {
        return 'application/json';
    }

    /**
     * Get the error response associated with the given exception.
     *
     * @param \Throwable $exception
     * @param string     $id
     * @param int        $code
     * @param string[]   $headers
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function display(\Throwable $exception, string $id, int $code, array $headers)
    {
        $info = $this->info->generate($exception, $id, 400);

        $error = ['id' => $id, 'status' => $info['code'], 'title' => $info['name'], 'detail' => $info['detail'], 'meta' => ['details' => $exception->getMessageBag()->all()]];

        return new JsonResponse(['errors' => [$error]], 400, array_merge($headers, ['Content-Type' => $this->contentType()]));
    }

    /**
     * Can we display the exception?
     *
     * @param \Throwable $original
     * @param \Throwable $transformed
     * @param int        $code
     *
     * @return bool
     */
    public function canDisplay(\Throwable $original, \Throwable $transformed, int $code)
    {
        return $transformed instanceof ValidationException;
    }

    /**
     * @inheritDoc
     */
    public function isVerbose()
    {
        return false;
    }
}
